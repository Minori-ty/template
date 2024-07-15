// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'detail.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

UserList _$UserListFromJson(Map<String, dynamic> json) => UserList(
      total: (json['total'] as num).toInt(),
      list: (json['list'] as List<dynamic>)
          .map((e) => User.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$UserListToJson(UserList instance) => <String, dynamic>{
      'total': instance.total,
      'list': instance.list,
    };

User _$UserFromJson(Map<String, dynamic> json) => User(
      name: json['name'] as String,
      age: json['age'] as String,
    );

Map<String, dynamic> _$UserToJson(User instance) => <String, dynamic>{
      'name': instance.name,
      'age': instance.age,
    };
