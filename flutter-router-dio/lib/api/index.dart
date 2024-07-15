import 'package:dio/dio.dart';
import 'package:router/models/home/detail.dart';

Dio axios = Dio(BaseOptions(
    baseUrl: "http://10.168.1.15:5000",
    sendTimeout: const Duration(seconds: 1),
    receiveTimeout: const Duration(seconds: 1),
    connectTimeout: const Duration(seconds: 1)));

Future<UserList> getUserList() async {
  Response res = await axios.get("/list");
  return UserList.fromJson(res.data);
}
