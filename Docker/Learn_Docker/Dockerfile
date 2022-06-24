FROM alpine:3.10

# アクションのリポジトリからコードファイルをコンテナのファイルシステムパス '/' にコピーする
COPY entrypoint.sh /entrypoint.sh

# dockerコンテナが起動する際に実行されるコードファイル（'entrypoint.sh'）
ENTRYPOINT [ "/entrypoint.sh" ]
