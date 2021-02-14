from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('menu/', include('hot_res_app.urls')),
    path('waiter/', include('waiter.urls'))
]
