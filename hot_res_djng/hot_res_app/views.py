from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    return render(request, 'hot_res_app/home.html')
