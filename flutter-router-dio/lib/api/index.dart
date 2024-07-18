import 'package:dio/dio.dart';
import 'package:router/models/home/detail.dart';

const timeOut = 3;

Dio axios = Dio(BaseOptions(
    baseUrl: "http://10.168.1.15:5000",
    sendTimeout: const Duration(seconds: timeOut),
    receiveTimeout: const Duration(seconds: timeOut),
    connectTimeout: const Duration(seconds: timeOut)));

Future<UserList> getUserList() async {
  Response res = await axios.get("/list");
  return UserList.fromJson(res.data);
}
