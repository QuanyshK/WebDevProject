from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json
from api.models import SongInfo
from api.serializers import SongInfoSerializer
from rest_framework import generics


class songinfo(generics.ListCreateAPIView):
    serializer_class = SongInfoSerializer
    queryset = SongInfo.objects.all()

class songUpdateRetriveDelete(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = SongInfoSerializer
    queryset = SongInfo.objects.all()