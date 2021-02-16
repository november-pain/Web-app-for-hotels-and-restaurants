from django.db import models
from django.utils import timezone
import qrcode
from io import BytesIO
from django.core.files import File
from PIL import Image
from django.conf import settings


class Menu(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(
        upload_to="hot_res_app/static/hot_res_app/images/menu_items")
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return str(self.name)


class Category(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(
        upload_to="hot_res_app/static/hot_res_app/images/categories")

    def __str__(self):
        return str(self.name)


class Order(models.Model):
    order = models.JSONField()
    date_time = models.DateTimeField(default=timezone.now)
    place = models.CharField(max_length=31, default='')


class Completed_Order(models.Model):
    order = models.JSONField()
    date_time_started = models.DateTimeField()
    date_time_completed = models.DateTimeField(default=timezone.now)
    place = models.CharField(max_length=31, default='')


class Place(models.Model):
    name = models.CharField(max_length=31)
    url = models.URLField(default="http://{}:8000/menu".format(settings.IP))
    qr_code = models.ImageField(
        upload_to="hot_res_app/static/hot_res_app/images/qr_codes", blank=True)

    def __str__(self):
        return str(self.name)

    def save(self, *args, **kwargs):
        qr_img = qrcode.make(self.url)
        canvas = Image.new('RGB', (qr_img.pixel_size,
                                   qr_img.pixel_size), 'white')
        canvas.paste(qr_img)
        file_name = 'qr_code_{}.png'.format(self.name)
        buffer = BytesIO()
        canvas.save(buffer, 'PNG')
        self.qr_code.save(file_name, File(buffer), save=False)
        canvas.close()
        super().save(*args, **kwargs)


class WaiterCall(models.Model):
    place = models.CharField(max_length=31)
    date_time = models.DateTimeField(default=timezone.now)
