# Generated by Django 4.2.11 on 2024-04-19 18:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SongInfo',
            fields=[
                ('id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('img', models.CharField(max_length=200)),
                ('name', models.CharField(max_length=100)),
                ('author', models.CharField(max_length=100)),
                ('link', models.CharField(max_length=200)),
                ('duration', models.PositiveIntegerField(max_length=100)),
            ],
            options={
                'verbose_name': 'SongInfo',
            },
        ),
    ]
