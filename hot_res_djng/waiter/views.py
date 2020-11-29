from django.shortcuts import render

# Create your views here.


def waiter_page(request):
    return render(request, 'waiter/waiter.html')