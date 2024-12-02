from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', default=None, blank=True, null=True)
    USERNAME_FIELD = 'email'  # Make email the unique identifier
    REQUIRED_FIELDS = ['profile_picture']  # Only email is required
    class Meta(AbstractUser.Meta):
         db_table='auth_user'
    
    def __str__(self):
        return self.email





# from django.db import models
# from django.contrib.auth.models import AbstractUser
# from django.utils.translation import gettext_lazy as _

# # Custom user model
# class User(AbstractUser):
#     fname = models.CharField(max_length=60)
#     lname = models.CharField(max_length=60)
#     profile_picture = models.ImageField(upload_to='profile_pics/', default=None, blank=True, null=True)

#     username = None  # Remove the default username field
#     email = models.EmailField(_('email address'), unique=True)

#     USERNAME_FIELD = 'email'  # Set email as the unique identifier
#     REQUIRED_FIELDS = ['fname', 'lname']  # Fields required for creating a superuser

#     class Meta(AbstractUser.Meta):
#         db_table='auth_user'

#     def __str__(self):
#         return self.email
