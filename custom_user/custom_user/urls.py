from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from api import views
from django.conf import settings
from api import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('signup/',views.signup),
    path('login/',views.login_user),
    path('csrf/',views.get_csrf_token),
    path('profile/',views.get_profile_data)
]
urlpatterns+=static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)