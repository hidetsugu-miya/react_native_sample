# ReactNativeSample

## インストール手順

### Homebrewインストール

```
/usr/bin/ruby -e “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)”
```

インストールが完了したら下記コマンドを実行してインストールが出来たか確認します。

```
brew –version
```

インストールが出来たら、下記のようにHomebrewのバージョンが確認できます。

```
Homebrew 2.2.0
Homebrew/homebrew-core (git revision 43ad0; last commit 2019-11-30)
```

### Node.jsインストール

#### nodebrewをインストール

```
brew install nodebrew
```

~/.bash_profile(zshなら~/.zshrc)に以下を追加

```
export PATH=$HOME/.nodebrew/current/bin:$PATH
```

再読み込み

```
$ source ~/.bash_profile
```

確認

```
$ nodebrew help
```

ディレクトリの作成

```
mkdir -p ~/.nodebrew/src
```

インストール可能なバージョンを確認します。

```
nodebrew ls-remote
```

```
nodebrew install-binary v13.2.0
```

Node.jsが問題なくインストールされたら、現在のバージョンを変更します。

```
nodebrew use 13.2.0
```

shellを再起動して設定ファイルを読み直します。

```
$ exec $SHELL -l
```

変更が完了したら、下記コマンドでバージョンを確認します。

```
node -v
```

Node.jsをインストールすると、Node.jsのパッケージ管理ツールであるnpmも一緒にインストールされます。
npmもインストールされたか確認するため下記コマンドを実行します。

```
npm version
```

### Watchmanインストール

React Nativeではファイルの変更時に自働で再ビルドを行いますが、そのファイル検知のためにWatchmanを利用しています。

```
brew install watchman
```

### React Native CLIインストール
React Native CLIはExpoを利用しないプロジェクトでは必須なので、グローバルにインストールします。

```
npm install -g react-native-cli
```

### Xcodeインストール

React NativeでiOSアプリを開発するためにはiOSの開発環境であるXcodeが必要になります。
下記のリンクからアプリストアでXcodeをダウンロードします。

https://apps.apple.com/us/app/xcode/id497799835

XcodeをインストールしたらCommand Line Toolsを設定する必要があります。
Xcodeを実行して上部のメニューでXcode > Preferences > Locationsを押して、
Command Line Toolsが設定されているか確認します。

### CocoaPodsインストール

CocoaPodsはiOSアプリ用のパッケージ管理ツールです。

React Nativeが対応出来ていないネイティブの機能を使いたい時などに必要となります。
パーミッションエラーになるためsudo権限でインストールします。

```
sudo gem install cocoapods
```

インストールが完了したら下記コマンドを実行してインストールが出来たか確認します。

```
pod –version
```

### JDKインストール

React NativeでAndoridアプリを開発するためには、
JDK(Java Development Kit)をインストールする必要があります。

下記コマンドを実行してJDKをインストールします。

```
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk/openjdk/adoptopenjdk8
```

インストールが完了したら下記コマンドを実行してインストールが出来たか確認します。

```
java -version
```

### Android Studioインストール

React NativeでAndroidアプリを開発するためにはAndroidの開発環境であるAndroid Studioが必要になります。
下記のリンクからAndroid Studioをダウンロードします。

https://developer.android.com/studio

ダウンロードが完了したら、インストールファイルを実行してAndroid Studioを起動します。

#### 初期設定

* Welcome
    * 画面右下のNextボタンをクリック　
* Install Type
    * Standard
    * 画面右下のNextボタンをクリック　
* Select UI Thema
    * ご自由に
    * 画面右下のNextボタンをクリック
* SDK Components Setup
    * Performance(Intel® HAXM)とAndroid Virtual Deviceを選択
    * 画面右下のNextボタンをクリック
* Emulator Settings
    * 適当 
    * 画面右下のNextボタンをクリック

#### SDK設定

* ホーム画面の右下にあるConfigure -> SDK Managerを選択してSDK設定画面に移動します。
* Appearance & Behavior -> System Settings -> Android SDK
* 右下のShow Pacakge Detailsを選択
* 以下の選択があれば、チェックし、インストールを行う。
    * Android SDK Platform 28
    * Intel x86 Atom System Image
    * Google APIs Intel x86 Atom System Image
    * Google APIs Intel x86 Atom_64 System Image

#### 環境変数の設定

$ vim ~/.zshrc

```
export ANDROID_HOME=/Users/miya/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

#### SDKライセンスの更新

$ sdkmanager --licenses

#### 起動の確認

$ adb

# クライアント変更方法

node scripts/set_app.js <env> <client>

## 検討事項

この方法だと、間違った方法でbuildしてしまう可能性がある。
