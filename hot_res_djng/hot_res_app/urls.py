from django.urls import path
from . import views

urlpatterns = [
    path('<slug:place>/', views.index),
    path('', views.index, name='index-page'),
    path('<slug:place>/post/order', views.order_post),
    path('db/<slug:load>/', views.load_from_db),
    path('<slug:place>/post/call_waiter', views.call_waiter)
]
