from django.urls import path
from . import views

urlpatterns = [
    path('songinfo/',views.songinfo.as_view()),
    path('albuminfo/',views.albuminfo.as_view()),
    path('authorinfo/',views.artistinfo.as_view()),
    path('songinfo/<int:pk>',views.sondCRUD.as_view()),
    path('albuminfo/<int:pk>',views.albumCRUD.as_view()),
    path('authorinfo/<int:pk>',views.authorCRUD.as_view()),
    ]