ssh travis@$DROPLET_IP ' \
  cd test-playground; \
  git checkout master; \
  git pull; \
  yarn install; \
  '