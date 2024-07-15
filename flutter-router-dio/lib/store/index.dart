import 'package:flutter/foundation.dart';

class Index with ChangeNotifier, DiagnosticableTreeMixin {
  int _currentIndex = 0;
  int get currentIndex => _currentIndex;

  void setCurrentIndex(int index) {
    _currentIndex = index;
    notifyListeners();
  }
}

class LoginStore with ChangeNotifier, DiagnosticableTreeMixin {
  bool _isLogin = false;
  bool get isLogin => _isLogin;

  void setIsLogin(bool isLogin) {
    _isLogin = isLogin;
    notifyListeners();
  }
}
