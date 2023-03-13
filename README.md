ios/xcode for those of u who haven't set it up yet 
(this might not be the exact right steps):
```
sudo gem install cocoapods
cd ios
pod cache clean --all 
rm -rf "`pwd`/Pods/"
pod init && pod install
npx react-native start
```
