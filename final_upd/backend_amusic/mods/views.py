from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json

from rest_framework.response import Response
from rest_framework.views import APIView

from .models import SongInfo, AlbumInfo, AuthorInfo
from .serializers import SongInfoSerializer, AlbumInfoSerializer, AuthorSerializer
from rest_framework import generics, status
import logging

logger = logging.getLogger(__name__)


class songinfo(generics.ListCreateAPIView):
    serializer_class = SongInfoSerializer
    queryset = SongInfo.objects.all()


class sondCRUD(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = SongInfoSerializer
    queryset = SongInfo.objects.all()


class albumCRUD(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = AlbumInfoSerializer
    queryset = AlbumInfo.objects.all()


class authorCRUD(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = AuthorSerializer
    queryset = AuthorInfo.objects.all()


class albuminfo(generics.ListCreateAPIView):
    serializer_class = AlbumInfoSerializer
    queryset = AlbumInfo.objects.all()


class artistinfo(generics.ListCreateAPIView):
    serializer_class = AuthorSerializer
    queryset = AuthorInfo.objects.all()


class AlbumByAuthors(generics.ListAPIView):
    serializer_class = AlbumInfoSerializer

    def get_queryset(self):
        author_id = self.kwargs['id']
        return AlbumInfo.objects.filter(author_id=author_id)


"""""
class lastSongInfo(generics.ListCreateAPIView):
    serializer_class = SongInfoSerializer
    queryset = SongInfo.objects.all()


"""""
