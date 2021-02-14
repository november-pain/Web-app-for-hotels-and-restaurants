from django.shortcuts import render
from .models import Menu, Category, Place, Order, Completed_Order
from django.core.serializers import serialize
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json


def index(request):
    return render(request, 'hot_res_app/index.html')


@csrf_exempt
def order_post(request):
    if request.method == "POST":
        data = json.loads(request.body.decode("utf-8"))
        print(type(data))
        Order.objects.create(order=data)
        return HttpResponse('')


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
        if load == 'menu':
            resp = serialize("json", Menu.objects.all())
        elif load == 'categories':
            resp = serialize("json", Category.objects.all())
        elif load == 'orders':
            resp = serialize("json", Order.objects.all())
        elif load == 'completed_orders':
            resp = serialize("json", Completed_Order.objects.all())

        return JsonResponse(resp, safe=False, json_dumps_params={"indent": 4})
