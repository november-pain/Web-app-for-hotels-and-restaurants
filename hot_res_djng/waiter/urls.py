from django.urls import path, re_path
from . import views


urlpatterns = [
    path('', views.waiter_page),
    path('post/', views.order_post, name="order")
]

