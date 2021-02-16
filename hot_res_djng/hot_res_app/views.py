from django.shortcuts import render
from .models import Menu, Category, Place, Order, WaiterCall, Completed_Order
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
    if not valid_place(place):
        return HttpResponseNotFound('<h1>You entered wrong URL. Try to scan QR-code again</h1>')
    if request.method == "GET":
        return render(request, 'hot_res_app/index.html')
    else:
        return HttpResponseNotFound('<h1>Wrong type of request specified</h1>')


def order_post(request, place):
    if not valid_place(place):
        return HttpResponseNotFound('<h1>You entered wrong URL. Try to scan QR-code again</h1>')
    if request.method == "POST":
        data = json.loads(request.body.decode("utf-8"))
        Order.objects.create(order=data, place=place)
        return HttpResponse('')
    else:
        return HttpResponseNotFound('<h1>Wrong type of request specified</h1>')


def load_from_db(request, load):
    if request.method == "GET":
        if load == 'menu':
            resp = serialize("json", Menu.objects.all())
        elif load == 'categories':
            resp = serialize("json", Category.objects.all())
        else:
            return HttpResponseNotFound("<h1>Wrong request parameter</h1>")

        return JsonResponse(parse_json(resp), safe=False)
    else:
        return HttpResponseNotFound('<h1>Wrong type of request specified</h1>')


def call_waiter(request, place):
    if not valid_place(place):
        return HttpResponseNotFound('<h1>You entered wrong URL. Try to scan QR-code again</h1>')
    if request.method == "POST":
        WaiterCall.objects.create(place=place)
        return HttpResponse('')
    else:
        return HttpResponseNotFound('<h1>Wrong type of request specified</h1>')
