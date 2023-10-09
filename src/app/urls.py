from django.contrib import admin
from django.urls import path
from .views import home, mensajes, perfil
urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', home, name='home'),
    path('mensajes/', mensajes, name='mensajes'),
    path('perfil/', perfil, name='perfil')
]
