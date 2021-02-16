from django.urls import path, re_path
from . import views


urlpatterns = [
    path('', views.waiter_page, name='waiter'),
    path('login/', views.login_page, name='login'),
    path('logout/', views.logoutUser, name='logout'),
    path('post/orderdone/', views.order_done),
    path('post/delete_order/', views.order_done),
    path('db/<slug:load>/', views.load_from_db),
]
