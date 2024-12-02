from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "email",
            "password",
            "first_name",
            "last_name",
            "profile_picture",
        ]

    def create(self, validated_data):
        username = validated_data.get("username")
        if not username:
            raise ValueError("The given username must be set")
        user = User.objects.create_user(
            username=validated_data.get("username"),
            email=validated_data.get("email"),
            password=validated_data.get("password"),
            first_name=validated_data.get("first_name"),
            last_name=validated_data.get("last_name"),
            profile_picture=validated_data.get("profile_picture", None),
        )
        return user
