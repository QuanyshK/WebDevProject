from rest_framework import serializers
from .models import SongInfo, AlbumInfo


class SongInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = SongInfo
        fields = "__all__"


class AlbumInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlbumInfo
        fields = "__all__"

"""""
class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model=AuthorInfo
        fields = "__all__"
"""""