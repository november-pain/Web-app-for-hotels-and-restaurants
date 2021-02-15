# Generated by Django 3.1.3 on 2021-02-15 01:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hot_res_app', '0009_auto_20210208_1801'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='place',
            field=models.CharField(default='', max_length=31),
        ),
        migrations.AlterField(
            model_name='place',
            name='url',
            field=models.URLField(default='http://192.168.0.100:8000/menu'),
        ),
    ]