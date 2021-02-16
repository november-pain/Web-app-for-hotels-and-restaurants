from django.contrib import admin
from .models import Menu, Category, Order, Place, Completed_Order, WaiterCall

admin.site.register(Menu)
admin.site.register(Category)
admin.site.register(Order)
admin.site.register(Place)
admin.site.register(Completed_Order)
admin.site.register(WaiterCall)
