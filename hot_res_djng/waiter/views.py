from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt
def order_post(request):
    if request.method == "POST":
        data = json.loads(request.body.decode("utf-8"))
        print(data)
        return HttpResponse('')


def waiter_page(request):
    return render(request, 'waiter/waiter.html')