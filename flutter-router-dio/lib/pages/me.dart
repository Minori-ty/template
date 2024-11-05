import 'package:flutter/material.dart';

class Me extends StatelessWidget {
  const Me({super.key});

  @override
  Widget build(BuildContext context) {
    return const Column(
      children: [
        Text(
          "1",
          style: TextStyle(),
        ),
        SizedBox(
          child: Text("2"),
        ),
        Text(
          "2",
          style: TextStyle(),
        ),
      ],
    );
  }
}
