from django.shortcuts import render


def waiter_page(request):
    return render(request, 'waiter/waiter.html')