.PHONY: build run clean

build:
	hugo --destination docs
	cp CNAME docs/

run:
	hugo server

clean:
	rm -rvf docs/*
	rm -rvf public
