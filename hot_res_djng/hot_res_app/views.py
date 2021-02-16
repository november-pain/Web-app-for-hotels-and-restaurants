from django.shortcuts import render
from .models import Menu, Category, Place, Order, Completed_Order
from django.core.serializers import serialize
from django.http import JsonResponse, HttpResponse, HttpResponseNotFound
from django.views.decorators.csrf import ensure_csrf_cookie
import json
from global_package import parse_json


def valid_place(place):
    if json.loads(serialize("json", Place.objects.filter(name=place))):
        return True
    else:
        return False

@ensure_csrf_cookie
def index(request, place):
    if request.method == "GET" and valid_place(place):
        return render(request, 'hot_res_app/index.html')
    else:
        return HttpResponseNotFound('<h1>You entered wrong URL. Try to scan QR-code again</h1>')


def order_post(request, place):
    if request.method == "POST" and valid_place(place):
        data = json.loads(request.body.decode("utf-8"))
        Order.objects.create(order=data, place=place)
        return HttpResponse('')


def load_from_db(request, load):
    if request.method == "GET":
        if load == 'menu':
            resp = serialize("json", Menu.objects.all())
        elif load == 'categories':
            resp = serialize("json", Category.objects.all())
        else:
            return HttpResponseNotFound("<h1>Wrong request parameter</h1>")

        return JsonResponse(parse_json(resp), safe=False, json_dumps_params={"indent": 4})


def call_waiter(request, place):
    if request.method == "POST" and valid_place(place):
        return HttpResponse('')
