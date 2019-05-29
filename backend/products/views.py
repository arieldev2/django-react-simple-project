from .models import Product
from .serializers import ProductSerializer
from rest_framework.viewsets import ModelViewSet

class ProductoViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer