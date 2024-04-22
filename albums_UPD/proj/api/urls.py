from django.urls import path
from . import views

urlpatterns = [
    path('songinfo/',views.songinfo.as_view()),
    path('albuminfo/',views.albuminfo.as_view()),
    ]