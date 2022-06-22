OUTDIR=./src/
buf-generate:
	protoc \
		--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
		--ts_out=service=grpc-web:${OUTDIR} \
		--js_out=import_style=commonjs,binary:${OUTDIR} \
		./proto/metronion/v1/metronion.proto
	protoc \
		--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
		--ts_out=service=grpc-web:${OUTDIR} \
		--js_out=import_style=commonjs,binary:${OUTDIR} \
		./proto/wearables/v1/wearables.proto
# grpc-web-generate:
# 	protoc \
# 		--plugin=protoc-gen-grpc-web=/usr/local/bin/protoc-gen-grpc-web \
# 		--js_out=import_style=commonjs,binary:${OUTDIR} \
# 		 --grpc-web_out=import_style=typescript,mode=grpcweb:${OUTDIR} \
# 		./proto/metronion/v1/metronion.proto
