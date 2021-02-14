from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from hot_res_app.models import Menu, Category, Place, Order, Completed_Order
from django.core.serializers import serialize


@login_required(login_url='login')
def waiter_page(request):
    return render(request, 'waiter/waiter.html')

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


@csrf_exempt
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
    if request.method == "DELETE":
        id = int(request.body.decode("utf-8"))
        ord_to_complete = Completed_Order.objects.get(pk=id)
        Completed_Order.objects.filter(pk=id).delete()
        return HttpResponse('')


def load_from_db(request, load):
    if request.method == "GET":      
        if load == 'orders':
            resp = serialize("json", Order.objects.all())
        elif load == 'completed_orders':
            resp = serialize("json", Completed_Order.objects.all())

        return JsonResponse(resp, safe=False, json_dumps_params={"indent": 4})