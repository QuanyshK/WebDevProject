from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField
# Create your models here.

class User(AbstractUser):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    playlists = ArrayField(models.PositiveIntegerField(), default=list)
    last10 = ArrayField(models.PositiveIntegerField(), default=list)
    username = None



    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

