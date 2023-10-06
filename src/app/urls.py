from django.contrib import admin
from django.urls import path
from .views import home, mensajes
urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', home, name='home'),
    path('mensajes/', mensajes, name='mensajes')
]
