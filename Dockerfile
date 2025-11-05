# Dockerfile
FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Instalar dependências do sistema
RUN apt-get update && apt-get install -y \
    build-essential libpq-dev && \
    rm -rf /var/lib/apt/lists/*

# Instalar requirements.txt
COPY backend/requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copiar Django
COPY backend/ ./backend

# Copiar React build para staticfiles
COPY backend/dist/ ./backend/staticfiles/

WORKDIR /app/backend

# Coletar static
RUN python manage.py collectstatic --noinput

EXPOSE 8000

# Executar Gunicorn
CMD ["gunicorn", "setup.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "3"]
# CMD ["bash", "-c", "python manage.py collectstatic --noinput && gunicorn setup.wsgi:application --bind 0.0.0.0:8000 --workers 3"]