from django.urls import path, re_path
from . import views

urlpatterns = [path(str(i), views.index, name='index-page') for i in range(10)]
urlpatterns.extend([
    path('', views.index, name='index-page'),
    path('db/<slug:load>/', views.load_from_db)
    # re_path(r'^db/(?P<load>[\w.@+-]+)/$', views.load_from_db),
    
])

