from django.urls import path
from . import views

urlpatterns = [path(str(i), views.index, name='index-page') for i in range(10)]
urlpatterns.extend([
    path('', views.index, name='index-page'),
    path('menu/', views.load_from_db)
])

