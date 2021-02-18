from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.http import JsonResponse, HttpResponse, HttpResponseNotFound
from hot_res_app.models import Order, Completed_Order, WaiterCall
from django.core.serializers import serialize
from django.views.decorators.csrf import ensure_csrf_cookie
from global_package import parse_json


@ensure_csrf_cookie
@login_required(login_url='login')
def waiter_page(request):
    if request.method == "GET":
        return render(request, 'waiter/waiter.html')
    else:
        return HttpResponseNotFound('<h1>Wrong type of request specified</h1>')


def login_page(request):
    if request.user.is_authenticated:
        return redirect('waiter')
    else:
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')

            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                return redirect('waiter')
            else:
                messages.error(request, 'Username or password is invalid')

        return render(request, 'waiter/login.html')


def logoutUser(request):
    logout(request)
    return redirect('login')


def order_done(request):
    if request.method == "POST":
        id = int(request.body.decode("utf-8"))
        ord_to_complete = Order.objects.get(pk=id)
        Completed_Order.objects.create(
            order=ord_to_complete.order,
            date_time_started=ord_to_complete.date_time
        )
        Order.objects.filter(pk=id).delete()
        return HttpResponse('')
    else:
        return HttpResponseNotFound('<h1>Wrong type of request specified</h1>')


def delete_order(request):
    if request.method == "DELETE":
        id = int(request.body.decode("utf-8"))
        Completed_Order.objects.filter(pk=id).delete()
        return HttpResponse('')
    else:
        return HttpResponseNotFound('<h1>Wrong type of request specified</h1>')


def load_from_db(request, load):
    if request.method == "GET":
        if load == 'orders':
            resp = serialize("json", Order.objects.all())
        elif load == 'completed_orders':
            resp = serialize("json", Completed_Order.objects.all())
        elif load == 'waiter_call':
            resp = serialize("json", WaiterCall.objects.all())
        else:
            return HttpResponseNotFound('<h1>Wrong request parameter</h1>')

        return JsonResponse(parse_json(resp), safe=False)
    else:
        return HttpResponseNotFound('<h1>Wrong type of request specified</h1>')


def delete_waiter_call(request):
    if request.method == "DELETE":
        return HttpResponse('')
    else:
        return HttpResponseNotFound('<h1>Wrong type of request specified</h1>')
