from rest_framework import serializers
from .models import SongInfo


class SongInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = SongInfo
        fields = "__all__"
