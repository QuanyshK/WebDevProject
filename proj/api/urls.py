from django.urls import path
from . import views

urlpatterns = [
    path('songinfo/',views.songinfo.as_view()),
    path('songinfo/<int:pk>',views.songUpdateRetriveDelete.as_view()),
    ]