from django.urls import path, re_path
from . import views


urlpatterns = [
    path('', views.waiter_page, name='waiter'),
    path('login/', views.login_page, name='login'),
    path('logout/', views.logoutUser, name='logout'),
]

