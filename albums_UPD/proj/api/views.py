from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json

from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import SongInfo, AlbumInfo
from api.serializers import SongInfoSerializer, AlbumInfoSerializer
from rest_framework import generics, status
import logging
logger = logging.getLogger(__name__)


class songinfo(generics.ListCreateAPIView):
    serializer_class = SongInfoSerializer
    queryset = SongInfo.objects.all()


class albuminfo(generics.ListCreateAPIView):
    serializer_class = AlbumInfoSerializer
    queryset = AlbumInfo.objects.all()

"""""
class artistinfo(generics.ListCreateAPIView):
    serializer_class =AuthorSerializer
    queryset =AuthorInfo.objects.all()
"""""
