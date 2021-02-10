from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages


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