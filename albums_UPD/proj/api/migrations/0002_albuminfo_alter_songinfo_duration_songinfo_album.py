# Generated by Django 4.2.11 on 2024-04-21 22:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AlbumInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.CharField(max_length=200)),
                ('name', models.CharField(max_length=100)),
                ('author', models.CharField(max_length=100)),
                ('duration', models.PositiveIntegerField()),
                ('songamount', models.PositiveIntegerField()),
                ('year', models.PositiveIntegerField()),
            ],
            options={
                'verbose_name': 'AlbumInfo',
            },
        ),
        migrations.AlterField(
            model_name='songinfo',
            name='duration',
            field=models.PositiveIntegerField(),
        ),
        migrations.AddField(
            model_name='songinfo',
            name='album',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='api.albuminfo'),
        ),
    ]
