# Generated by Django 4.2.11 on 2024-04-21 22:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_songinfo_album'),
    ]

    operations = [
        migrations.AlterField(
            model_name='songinfo',
            name='album',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.albuminfo'),
        ),
    ]