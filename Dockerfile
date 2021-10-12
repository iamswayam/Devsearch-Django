FROM python:3

ENV PYTHONUNBUFFERED 1

RUN mkdir /abc

WORKDIR /abc

COPY . /abc/

RUN pip install -r requirements.txt