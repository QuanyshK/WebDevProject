from django.urls import path
from . import views
from .views import songinfo

urlpatterns = [
    path('songinfo/', songinfo.companies)
    ]
