from django.db import models

class Product(models.Model):
    product = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.producto
