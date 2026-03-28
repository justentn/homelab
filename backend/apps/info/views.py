from django.http import JsonResponse
from .services import get_info_data


def home(request):
    return JsonResponse({"message": "Jus10 API"})


def get_info(request):
    return JsonResponse(get_info_data())

